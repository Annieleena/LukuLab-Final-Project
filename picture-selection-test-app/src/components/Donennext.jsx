import { useState } from 'react';

export default function Donetonext() {
    const [index, setIndex] = useState(0);

      let hasDone = index < 0;
      let hasNext = index > 1;//choices.length + 1;

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
        <main>
         <button className='btn.done'
            onClick={handleDoneClick}
            enabled={!hasDone}
            value = {"Done"}
          />
          <button className='btn.next'
            onClick={handleNextClick}
            disabled={!hasNext}
            value = {"Next"}
          />
          </main>
      );
}