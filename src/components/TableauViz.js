import React, { useRef, useEffect } from 'react';

const TableauViz = () => {
  const ref = useRef(null);

  useEffect(() => {
    // This code runs once after the component has mounted
    const vizElement = ref.current;
    
    // The Tableau embed code creates a <script> tag to load their API
    // The same thing is done here, but in a React-friendly way.
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    
    // The embedded code Tableau provides dynamically sets the height and width.
    // We can't do that here directly, as the <object> is not yet replaced by the iframe.
    // Luckily, the Tableau script handles the sizing when it loads.
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      ref={ref}
      className='tableauPlaceholder'
      style={{ position: 'relative' }}
    >
      <noscript>
        <a href='#'>
          <img
            alt='BWW &amp; Control Group Locations'
            src='https://public.tableau.com/static/images/Bu/BuffaloWildWings/BWWControlGroupLocations/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='BuffaloWildWings/BWWControlGroupLocations' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Bu/BuffaloWildWings/BWWControlGroupLocations/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

export default TableauViz;
