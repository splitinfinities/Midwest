export const currency = function (value: string) {
  const adjust = value[0] === '$' ? 0 : 1;
  let money = value.replace(/[^0-9.]/g,'');
  return {adjust, value: `$${money}`};
}

export const ein = function (value: string) {
  let ein = value.replace(/\D/g,'').substring(0,10);
  let len = ein.length;
  if(len < 2){
    ein=ein;
  } else if(len>=2) {
    ein=ein.substring(0,2)+'-'+ein.substring(2,9);
  }
  return {adjust: null, value: ein};
}

export const phone = function (value: string) {
  let ph = value.replace(/\D/g,'').substring(0,10);
  const len = ph.length;

  if(len===0){
    ph=ph;
  }else if(len<3){
    ph='('+ph;
  }else if(len===3){
    ph = '('+ph + ') ';
  }else if(len<6){
    ph='('+ph.substring(0,3)+') '+ph.substring(3,6);
  }else if(len===6){
    ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+ '-';
  }else{
    ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+'-'+ph.substring(6,10);
  }

  return {adjust: null, value: ph};
}

export const postalcode = function (value: string) {
  let zip = value.replace(/\D/g,'').substring(0,9);
  let len = zip.length;
  let adjust = null;
  if(len < 5){
    zip=zip;
  } else if(len>5) {
    zip=zip.substring(0,5)+'-'+zip.substring(5,9);
  }
  return {adjust: adjust, value: zip};
}

export const formatters = {
  phone,
  currency,
  ein,
  postalcode
}
