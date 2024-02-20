let ClockTime = () => {
  let times = new Date();
  return (
    <h2>
      This is the time:{times.toLocaleDateString()}-{times.toLocaleTimeString()}
    </h2>
  );
};

export default ClockTime;
