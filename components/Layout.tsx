import React from 'react';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>HOME</li>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
