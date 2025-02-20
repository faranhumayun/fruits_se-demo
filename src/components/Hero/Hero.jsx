import heroImg from '../../../src/assets/img/uniqlo.png'

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex md:flex-row flex-col md:items-center justify-between gap-5 my-20">
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-black'>Healthy</h1>
          <br />
          <h1 className='text-secondary font-bold text-lg'>Fresh Fruits</h1>
          <p className="capitalize font-medium">order now for fresh healthy life</p>
          <p className="capitalize">
            Healthy and yummy food for fresh morning breakfast. Eat daily for
            good health and mind
          </p>
          <p className="capitalize">
            Order now and get 20% off on your first order
          </p>
          <button className="text-white bg-primary px-4 py-2 rounded-xl w-fit">
            Order Now
          </button>
        </div>
        <div>
          <img className='w-52 h-auto' src={heroImg} />
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <h1>Healthy</h1>
          <br />
          <h1>Fresh Fruits</h1>
          <p className="capitalize">order now for fresh healthy life</p>
          <p className="capitalize">
            Healthy and yummy food for fresh morning breakfast. Eat daily for
            good health and mind
          </p>
          <p className="capitalize">
            Order now and get 20% off on your first order
          </p>
          <button className="text-white bg-primary px-4 py-2 rounded-xl">
            Order Now
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <h1>Healthy</h1>
          <br />
          <h1>Fresh Fruits</h1>
          <p className="capitalize">order now for fresh healthy life</p>
          <p className="capitalize">
            Healthy and yummy food for fresh morning breakfast. Eat daily for
            good health and mind
          </p>
          <p className="capitalize">
            Order now and get 20% off on your first order
          </p>
          <button className="text-white bg-primary px-4 py-2 rounded-xl">
            Order Now
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <h1>Healthy</h1>
          <br />
          <h1>Fresh Fruits</h1>
          <p className="capitalize">order now for fresh healthy life</p>
          <p className="capitalize">
            Healthy and yummy food for fresh morning breakfast. Eat daily for
            good health and mind
          </p>
          <p className="capitalize">
            Order now and get 20% off on your first order
          </p>
          <button className="text-white bg-primary px-4 py-2 rounded-xl">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
