import { stream } from 'm2';

const data = {
  blocks: Array(50).fill(0).map((_, i) => ({
    id: i,
    numbers: Array(20).fill(0).map((_, i) => ({ id: i, value: parseInt(Math.random() * 100) })),
    show: Math.random() - 0.5 > 0
  }))
};

export default () => stream((emt, { hook }) => {
  emt([data]);
  let offset = 0;
  window.fire = () => {
    offset += 100;
    const data = {
      blocks: Array(50).fill(0).map((_, i) => ({
        id: i + offset,
        numbers: Array(20).fill(0).map((_, i) => ({ id: i, value: parseInt(Math.random() * 100) })),
      }))
    };
    emt([data]);
  };

  hook.add(({ action }) => {
    if (action === 'update') {
        const data = {
          blocks: Array(50).fill(0).map((_, i) => ({
            id: i + offset,
            numbers: Array(20).fill(0).map((_, i) => ({ id: i, value: parseInt(Math.random() * 100) })),
          }))
        };
        emt([data]);
    }
    if (action === 'regenerate') {
        offset += 100;
        const data = {
          blocks: Array(50).fill(0).map((_, i) => ({
            id: i + offset,
            numbers: Array(20).fill(0).map((_, i) => ({ id: i, value: parseInt(Math.random() * 100) })),
          }))
        };
        emt([data]);
    }
  });
});




