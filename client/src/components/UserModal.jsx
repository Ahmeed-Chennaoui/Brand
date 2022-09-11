import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import WorkerAvatar from "./WorkerAvatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RatingMin from "./RatingMin";
import backend from "../APIs/backend";
import { isEmpty } from "../utils/isEmpty";
import { Icon } from "@iconify/react";
import { Alert, Button, Divider, Rating, TextField } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { GlobalContext } from "../contexts/globalContext";
import { SearchContext } from "../contexts/searchContext";

function UserModal({ worker, open, setOpen }) {
  const [leaveReview, setLeaveReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser } = useContext(GlobalContext);
  const { reload } = useContext(SearchContext);

  const handleClose = () => setOpen(false);
  useEffect(() => {
    (async () => {
      const response = (await backend.get(`/user/${worker.email}`)).data;
      setReviews(response.reviews);
    })();
  }, [reload]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backdropFilter: "blur(4px)",
        }}
      >
        <Box sx={style}>
          <WorkerAvatar worker={worker} />
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" color="primary">
                  Description
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography fontSize="1.75rem">{worker.description}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" color="primary">
                  Contact Information
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <InfoIcon icon="fa:phone" info={worker.phone} />
                <InfoIcon icon="ic:round-alternate-email" info={worker.email} />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" color="primary">
                  Reviews
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                {React.Children.toArray(
                  reviews.map((el, index) => {
                    if (index === reviews.length - 1) {
                      return <Review review={el} />;
                    }
                    return (
                      <>
                        <Review review={el} />
                        <Divider />
                      </>
                    );
                  })
                )}
                {!reviews.length && (
                  <Typography style={{ color: "rgba(0,0,0,0.7)" }}>
                    No reviews yet
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
            {error && (
              <Alert severity="error" sx={{ width: "100%" }}>
                {error}
              </Alert>
            )}
            {message && (
              <Alert severity="success" sx={{ width: "100%", my: 1 }}>
                {message}
              </Alert>
            )}
            {!leaveReview && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    if (isEmpty(currentUser)) {
                      setLeaveReview(false);
                      setError("You must be logged in to leave a  review");
                    } else {
                      setLeaveReview(true);
                      setError("");
                    }
                  }}
                >
                  Leave a Review
                </Button>
              </Box>
            )}
            {leaveReview && (
              <ReviewForm
                handleClose={() => setLeaveReview(false)}
                worker={worker}
                setMessage={setMessage}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default UserModal;
const style = {
  position: "absolute",
  overflow: "scroll",
  backgroundColor: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100vw", sm: "90vw", md: "60vw", lg: "50vw", xl: "40vw" },
  height: "70vh",
  display: "flex",
  flexDirection: "column",

  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const InfoIcon = ({ icon, info }) => {
  return (
    <Box
      sx={{
        width: "98%",
        p: 1,
        mb: "",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Icon
        icon={icon}
        width={32}
        style={{ marginRight: "20px", marginBottom: "10px" }}
      />
      <Typography style={{ wordBreak: "break-word", fontSize: "1.25rem" }}>
        {info}
      </Typography>
    </Box>
  );
};

const ReviewForm = ({ handleClose, worker, setMessage }) => {
  const [rating, setRating] = useState(3);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(GlobalContext);
  const { reload, setReload } = useContext(SearchContext);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    const requestConfig = {
      headers: {
        Authorization: "Bearer " + currentUser.AccessToken,
      },
    };
    const response = await backend.post(
      `/review/${worker.email}`,
      {
        stars: rating,
        description,
      },
      requestConfig
    );
    if (response.data.error) {
      setError(response.data.error);
      setMessage("");
    }
    if (response.data.message) {
      setMessage(response.data.message);
      setError("");
      setReload(!reload);
      handleClose();
    }
  };
  return (
    <Box sx={{ mt: 2 }}>
      <WorkerAvatar worker={currentUser} />
      <RatingMin value={rating} setValue={setRating} />
      <TextField
        sx={{ mt: 2 }}
        value={description}
        onChange={handleDescriptionChange}
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Describe your experience"
      />
      {error && (
        <Alert severity="error" sx={{ width: "100%", my: 1 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          color="error"
          variant="contained"
          sx={{ m: 1 }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          sx={{ m: 1 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const Review = ({ review }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const reviewUser = (await backend.get(`/user/${review.email}`)).data;
      setUser(reviewUser);
    })();
  }, []);
  return (
    <Box sx={{ my: 3 }}>
      <WorkerAvatar worker={user} />
      <Rating value={review.stars} readOnly />
      <Typography>{review.description}</Typography>
    </Box>
  );
};
