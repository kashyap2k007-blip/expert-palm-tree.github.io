import React, { useState } from 'react';
export default function AboutModal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn btn-link btn-sm" onClick={()=>setShow(true)}>About</button>
      {show && <div className="modal" tabIndex="-1" style={{display:'block', background:'rgba(0,0,0,0.3)'}}>
        <div className="modal-dialog modal-dialog-centered"><div className="modal-content">
            <div className="modal-header"><h5 className="modal-title">About & Ethics</h5>
              <button type="button" className="btn-close" onClick={()=>setShow(false)}></button>
            </div>
            <div className="modal-body small">
              <p><strong>MedAdmit</strong> is a <u>reference platform built by medical education researchers</u>, committed to transparent, facts-only, privacy-first NEET counseling data.</p>
              <ul>
                <li>No subjective ranking. No predictions. Data only from verified official sources.</li>
                <li>No user data collection. No analytics.</li>
                <li>For reference only. Always verify with official sites before making decisions.</li>
              </ul>
              <p>Contact: <span style={{filter:'blur(2px)'}}>Confidential (on request)</span></p>
            </div>
        </div></div>
      </div>}
    </>
  );
}