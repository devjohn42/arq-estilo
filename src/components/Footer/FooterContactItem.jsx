import React from 'react';

const FooterContactItem = ({ icon, contact }) => {
  return (
    <span className="flex gap-x-2 lg:gap-x-3 items-center">
      <i>{icon}</i>
      <p>{contact}</p>
    </span>
  );
};

export default FooterContactItem;
