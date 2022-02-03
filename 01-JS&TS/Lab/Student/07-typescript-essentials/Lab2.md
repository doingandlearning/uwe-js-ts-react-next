# 1: Intersection Type

Imagine that you are a developer working on a truck builder feature for a custom truck website. You will need to make it possible for customers that come to the site to build a variety of truck types. To that end, you need to build your own intersection type, PickUptruck, by combining two types, Motor and Truck. You can then use your new type, PickUpTruck, with a function that returns the type and validates its input with the PickUpTruck intersection type.

Here are some steps that will help you to complete this activity:

1. Create a Motor type, which will house some common properties you may reuse on their own or in combination with other types to describe a vehicle object. You can use the following properties as a starting point: color, doors, wheels, and fourWheelDrive.

2. Create a Truck type with properties common to a truck, for example, doubleCab and winch.

3. Intersect the two types to create a PickUpTruck type.

4. Build a TruckBuilder function that returns our PickUpTruck type and also
takes PickUpTruck as an argument.

5. Console out the function return.

6. Once you complete the activity, you should obtain the following output:

```js
{
  color: 'red',
  doors: 4,
  doubleCab: true,
  wheels: 4,
  fourWheelDrive: true,
  winch: true
}
```

# 2. Union Type

A logistics company has asked you to develop a feature on their website that will allow customers to choose the way they would like their packages to be shipped – via land or air. You have decided to use union types to achieve this. You can build your own union type called ComboPack, which can be either the LandPack or AirPack type. You can add any properties to your package types that you think will be common to a package. Also, consider using one type literal to identify your package as air or land, and a label property that will be optional. You will then need to construct a class to process your packages. Your class should have a method to identify your package type that takes arguments of the ComboPack type and uses your literal property to identify the package type and add the correct label, air cargo or land cargo.

Here are some steps that will help you to complete this activity:

1. Build a LandPack and an AirPack type. Make sure to have a literal to identify the package type.

2. Construct a union type, ComboPack, which can be LandPack or AirPack.

3. Make a Shipping class to process your packages. Make sure to use your literal to identify your package types and modify your package with the correct label for its type.

4. Create two package objects of the AirPack and LandPack types.

5. Instantiate your Shipping class, process your new objects, and console out the
modified objects.