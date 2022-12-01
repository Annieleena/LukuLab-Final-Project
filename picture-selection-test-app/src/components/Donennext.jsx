

export default function Donetonext(props) {
   
    return (
      <div>
       <button className='btn.done'
          onClick={props.handleDoneClick}
          enabled={!props.hasDone}
        >
          Done
        </button>

        <button className='btn.next'
          onClick={props.handleNextClick}
          disabled={!props.hasDone||!props.hasNext}
        >
          Next
        </button>
        </div>
      
    
    );
}