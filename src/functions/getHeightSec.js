export default function(){
  let tab = [0];
  let valueTab = [];

  for(let i = 0; i <= 3; i++){
    tab[i+1] = document.querySelector(`.sec${i+1}`).offsetHeight;
  };

  valueTab[0] = 0;

  tab.reduce((last, now, index)=> {
    valueTab[index] = last + now;
    return last + now;
  });
  
  return valueTab;
};