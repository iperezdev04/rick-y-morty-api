import './Button.css'

function Button({children,onClick,IsDisabled,className}) {

  return (
    <button onClick={onClick} disabled={IsDisabled} className={`btn ${className} `} >
      {children}
    </button>
  )
}

export default Button