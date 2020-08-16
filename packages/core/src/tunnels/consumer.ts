export const consumer = (props: any, object: any) => { 

  if (!object.base) { 
    object.base = props.base; 
  } 

  if (!object.complement) { 
    object.complement = props.complement; 
  }

  object.dark = props.dark; 
}
