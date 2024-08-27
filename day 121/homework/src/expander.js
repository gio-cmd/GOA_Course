import React, { useState } from 'react';

function Expander() {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = 'this is veeery veery veery veeery veeery long message click read more button to see whole line';

  return (
    <div className="text-expander">
      <p>
        {isExpanded ? text : `${text.substring(0, 50)}...`}
      </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default Expander;