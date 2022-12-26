import cars from "@/data/cars.json";
import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import { supabase } from "../../../../supabase";

const prisma = new PrismaClient();

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number()
    .max(new Date().getFullYear() + 1)
    .min(1886)
    .required(),
  miles: Joi.number().required().min(0),
  city: Joi.string()
    .min(2)
    .required()
    .messages({ "any.required": "City is required", empty: "sadas" }),
  numberOfSeats: Joi.number().max(100).min(1).required(),
  features: Joi.array().items(Joi.string()).required(),
  description: Joi.string().min(40).required(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().required(),
  name: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    console.log("safasf paul ", error.message);
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  const {
    image,
    name,
    numberOfSeats,
    miles,
    price,
    features,
    description,
    listerId,
  } = body;

  const car = await prisma.car.create({
    data: {
      image,
      name,
      numberOfSeats: parseInt(numberOfSeats),
      miles: parseInt(miles),
      price: parseInt(price),
      features,
      description,
      listerId,
    },
  });

  return car;
});
