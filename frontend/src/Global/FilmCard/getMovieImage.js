import Episode1 from '../../Assets/Images/Movies/1.jpg';
import Episode2 from '../../Assets/Images/Movies/2.jpg';
import Episode3 from '../../Assets/Images/Movies/3.png';
import Episode4 from '../../Assets/Images/Movies/4.png';
import Episode5 from '../../Assets/Images/Movies/5.jpg';
import Episode6 from '../../Assets/Images/Movies/6.png';
import Episode7 from '../../Assets/Images/Movies/7.jpg';
import Episode8 from '../../Assets/Images/Movies/8.jpg';
import Episode9 from '../../Assets/Images/Movies/9.jpg';
import May4 from '../../Assets/Images/Movies/may4.png';

export default (episode) => {
  switch (episode) {
    case 1:
      return Episode1;
    case 2:
      return Episode2;
    case 3:
      return Episode3;
    case 4:
      return Episode4;
    case 5:
      return Episode5;
    case 6:
      return Episode6;
    case 7:
      return Episode7;
    case 8:
      return Episode8;
    case 9:
      return Episode9;
    default:
      return May4;
  }
};
