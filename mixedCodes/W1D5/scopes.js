let x = "global_x"

function outer(outer_param) {
  let y = "outer_local_y";
  // x,y and outer_param are accessible here i.e x,y and outer_param are in scope here
  console.log(x, y, outer_param);

  // inner_param and z are out of scope
  // console.log(inner_param, z)  
  function inner(inner_param) {
    let z = "inner_local_z";
    // x,y,z and outer_param all are accebile here
    console.log(z, inner_param, y, x);
  }
  console.log(x, y, outer_param);
  // inner_param and z are out of scope
  // console.log(inner_param, z) 

  inner("inner_parameter");
}

outer("outer_parameter");


// Why the order or output different?