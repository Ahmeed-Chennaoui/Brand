import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import backend from "../../../APIs/backend";
import VerificationRequest from "../components/VerificationRequest";
function Verification() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const getRequests = async () => {
      return await backend.get("/admin/requests");
    };
    const fetchRequestData = async () => {
      let requestList = (await getRequests()).data;
      requestList.forEach(async (element, index) => {
        let userData = (await backend.get(`/user/${element.email}`)).data;
        requestList[index] = {
          ...requestList[index],
          name: userData.name,
          familyName: userData.familyName,
        };
      });
      setRequests(requestList);
    };
    (async () => {
      await fetchRequestData();
    })();
  }, []);
  return (
    <Box>
      {React.Children.toArray(
        requests.map((el) => {
          return <VerificationRequest data={el} />;
        })
      )}
    </Box>
  );
}

export default Verification;
