import React from "react";
import { useParams } from "react-router";

export const RouterParameterTest = ({props}) => {
    const {pageId} = useParams();
    return (
        <div>
          You navigated to this page from : {pageId}
        </div>
      );
}

export default RouterParameterTest;