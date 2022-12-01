

      let hasDone = index < 0;
      let hasNext = index > choices.length + 1;

      function handleDoneClick() {
        if (hasDone) {
          setIndex(index + 1);
        }
      }
      function handleNextClick() {
        if (hasNext) {
          setIndex(index - 1);
        }
      }

      return (
         <button className='btn.done'
            onClick={handleDoneClick}
            enabled={!hasDone}
          >
            Done
          </button>
          <button className='btn.next'
            onClick={handleNextClick}
            disabled={!hasNext}
          >
            Next
          </button>
        
      
      );
}