function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
    
    return fare;
  }