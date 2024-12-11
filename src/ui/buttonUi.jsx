

const ButtonUi = ({text, onClick}) => {

  return (
    <>
        <button  onClick={onClick} className=" rounded-lg w-full mb-3 capitalize p-3 bg-[rgba(51,51,51,1)] hover:bg-[rgba(197,248,42,1)] cursor-pointer"> {text} </button>
    </>
  )
}

export default ButtonUi