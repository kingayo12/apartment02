const Map = () => {
  return (
    <div className='map bg_map'>
      <h1>Our Location</h1>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.32754086202!2d3.7398875750281366!3d6.480136043511751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfdffe916de07%3A0x36d9da8cba10fc7f!2sLakowe%20105101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725775482705!5m2!1sen!2sng'
        width='100%'
        height='400'
        allowfullscreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
