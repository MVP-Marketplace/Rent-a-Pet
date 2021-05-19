import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Steps, Step } from "react-step-builder";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import { Button, Col, Row } from "antd";

export default function MultiStepModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <button className="sign-up-btn" onClick={handleShow}>
        Sign Up with Google
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Steps>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={Step3} />
          <Step component={Step4} />
          <Step component={Step5} />
          <Step component={Step6} />
        </Steps>
      </Modal>
    </div>
  );
}
