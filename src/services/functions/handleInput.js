export const handleInput = (e, data, setData) => {
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
};
