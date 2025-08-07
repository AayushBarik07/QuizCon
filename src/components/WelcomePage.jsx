import React from 'react'

const WelcomePage = ({ showScreen, setShowScreen }) => {
  const containerStyle = {
    minHeight: '90vh',
    background: 'linear-gradient(135deg, #065f46 0%, #0f766e 50%, #164e63 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }

  const cardStyle = {
    backgroundColor: '#111827',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '500px',
    width: '100%',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    position: 'relative'
  }

  const iconStyle = {
    display: 'inline-block',
    padding: '12px',
    background: 'linear-gradient(135deg, #10b981, #14b8a6)',
    borderRadius: '50%',
    marginBottom: '1rem',
    fontSize: '2rem',
    animation: 'bounce 2s infinite'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem'
  }

  const underlineStyle = {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #34d399, #2dd4bf)',
    margin: '0 auto 1.5rem auto',
    borderRadius: '2px'
  }

  const buttonStyle = {
    background: 'linear-gradient(135deg, #059669, #0d9488)',
    border: 'none',
    color: 'white',
    padding: '12px 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    animation: 'pulse 2s infinite'
  }

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 6px',
    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
  }

  return (
    <>
      <div style={containerStyle}>
        <div className="card" style={cardStyle}>
          {/* Header Section */}
          <div>
            <div style={iconStyle}>
              <span>🧠</span>
            </div>
            
            <h1 style={titleStyle}>
              Welcome to the Quiz
            </h1>
            
            <div style={underlineStyle}></div>
          </div>

          {/* Button Section */}
          <div className="d-flex align-item-center py-3 justify-content-center">
            <button 
              onClick={() => setShowScreen('Ques')} 
              className="btn px-5"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Start
            </button>
          </div>

          {/* Decorative Elements */}
          <div style={{marginTop: '1rem'}}>
            <div style={{...dotStyle, backgroundColor: '#34d399'}}></div>
            <div style={{...dotStyle, backgroundColor: '#2dd4bf', animationDelay: '0.5s'}}></div>
            <div style={{...dotStyle, backgroundColor: '#22d3ee', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default WelcomePage