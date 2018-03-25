import React from "react";
import { withRouter } from "react-router-dom";
import { Button} from 'mdbreact';
const Back = ({ history }) =>
  history.length > 1 && (
    <Button  className="btn-custom"  color="secondary-color-dark"  onClick={history.goBack}>Cancel</Button>
  );

export default withRouter(Back);
