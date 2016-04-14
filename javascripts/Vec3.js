Vec3=function(x,y,z)
{
  this.x=x;
  this.y=y;
  this.z=z;
};

Vec3.prototype.add = function(v)
{
  this.x+=v.x;
  this.y+=v.y;
  this.z+=v.z;

  return this;
};

Vec3.prototype.sum=function()
{
  return this.x + this.y + this.z;
};

Vec3.prototype.min=function()
{
 var min
 if(this.x<this.y)
 {
   min=this.x
   if(min>this.z)
   {
     return this.z
   }else
   {
     return this.x
   }
 }else
 {
   min=this.y;
   if(min>this.z)
   {
     return this.z
   }else
   {
     return this.y
   }
 }
};


Vec3.prototype.mid=function()
{
 var x=this.x
 var y=this.y
 var z=this.z

 if((x>y&&x<z)||(x>z&&x<y))
 {
   return x;
 }else if((y>x&&y<z)||(y>z&&y<x))
 {
   return y;
 }else if((z>x&&z<y)||(z>y&&z<x))
 {
   return z;
 }
};

Vec3.prototype.max=function()
{
 var max
 if(this.x>this.y)
 {
   max=this.x
   if(max>this.z)
   {
     return this.x
   }else
   {
     return this.z
   }
 }else
 {
   max=this.y;
   if(max>this.z)
   {
     return this.y
   }else
   {
     return this.z
   }

 }
};

Vec3.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
};