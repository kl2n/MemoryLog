import React from 'react'

const IntroText = ({ startedToggleForm }) => {
  return (
    <div className="intro text-center position-relative z-1">
        <p className="fs-1 fw-semibold">
            How's your day!
        </p>
        <h5 className="mb-4 fw-light fs-2">
            Recording memorable moments is indeed a wonderful practice. It allows you to reflect on your thoughts, experiences, and emotions, while preserving memories and tracking personal growth. It's also an excellent tool for cultivating mindfulness and self-awareness.
        </h5>
        <button 
            type="button" 
            className="btn btn-custom-default border-box trans-smooth fs-6"
            onClick={startedToggleForm}
            aria-expanded="true">
            Get Started
        </button>
    </div>
  )
}

export default IntroText