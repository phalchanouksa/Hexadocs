---
title: MDX
# sidebar_position: 3
---

<!-- export const Tag = ({children, color}) => (
<span style={{
    backgroundColor: color,
    borderRadius: '4px',
    color: '#fff',
    padding: "1rem",
    fontWeight: "bold",
}}>
{children}
</span>
); -->

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight>
