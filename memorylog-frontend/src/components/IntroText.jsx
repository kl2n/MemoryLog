import React from 'react'

const IntroText = ({ startedToggleForm }) => {
  return (
    <section className="
        intro text-center
        col-12 col-lg-6 mx-auto
        pt-5 pb-5
        position-relative z-1">
        <p className="fs-2 fw-bold">
            How's your day!
        </p>
        <p className="fs-6 mb-4">
            Recording memorable moments is indeed a wonderful practice. It allows you to reflect on your thoughts, experiences, and emotions, while preserving memories and tracking personal growth. It's also an excellent tool for cultivating mindfulness and self-awareness.        </p>
        <button 
            type="button" 
            className="btn btn-custom-default border-box trans-smooth"
            onClick={startedToggleForm}
            aria-expanded="true">
            Get Started
        </button>
    </section>
  )
}

export default IntroText