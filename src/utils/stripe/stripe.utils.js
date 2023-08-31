import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
    "pk_test_51NkVWoGkyR8RHuXvFlkka80Ase0GjNyPoeiYmeFt6M1u0mAnfQwa4OHLACJtGhK4eqRO8DwEmeEpVBeKLz1OJvxt00wuey2wmS"
    );

    // const stripePromise = loadStripe('your publishable key here')
    // process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY