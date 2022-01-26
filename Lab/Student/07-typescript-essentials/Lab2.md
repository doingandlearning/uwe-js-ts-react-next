1: Intersection Type

Imagine that you are a developer working on a truck builder feature for a custom truck website. You will need to make it possible for customers that come to the site to build a variety of truck types. To that end, you need to build your own intersection type, PickUptruck, by combining two types, Motor and Truck. You can then use your new type, PickUpTruck, with a function that returns the type and validates its input with the PickUpTruck intersection type.

Here are some steps that will help you to complete this activity:

1. Create a Motor type, which will house some common properties you may reuse on their own or in combination with other types to describe a vehicle object. You can use the following properties as a starting point: color, doors, wheels, and fourWheelDrive.

2. Create a Truck type with properties common to a truck, for example, doubleCab and winch.

3. Intersect the two types to create a PickUpTruck type.

4. Build a TruckBuilder function that returns our PickUpTruck type and also
takes PickUpTruck as an argument.

5. Console out the function return.

6. Once you complete the activity, you should obtain the following output:
{
  color: 'red',
  doors: 4,
  doubleCab: true,
  wheels: 4,
  fourWheelDrive: true,
  winch: true
}