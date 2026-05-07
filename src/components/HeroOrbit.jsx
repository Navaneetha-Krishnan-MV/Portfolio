const HeroOrbit = ({ size,shouldOrbit, orbitDuration, shouldSpin, spinDuration, rotate, children }) => {
  return (
    <div className="absolute left-1/2 top-1/2"
         style={{ 
           width: `${size}px`, 
           height: `${size}px`,
           transform: `translate(-50%, -50%)`,
           animation: shouldOrbit ? `spin ${orbitDuration} linear infinite` : 'none'
         }}>
      <div className="absolute"
           style={{
             top: '0px',
             left: '50%',
             transform: `translateX(-50%) rotate(${rotate}deg)`,
             transformOrigin: `0 ${size/2}px`
           }}>
        <div style={{
          animation: shouldSpin ? `spin ${spinDuration} linear infinite reverse` : 'none'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
