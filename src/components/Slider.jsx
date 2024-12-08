import { Carousel, Typography, Button } from "@material-tailwind/react";
 
function Slider({ sliderData }) {
  return (
    <>
        <Carousel className="h-[90%] w-full" autoplay={true} autoplayDelay={5000} loop={true}>
            {sliderData.map((item, index) => (
                <div key={index} className="relative h-full w-full">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {item.desc}
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button variant="text" color="white" className="border border-white">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </Carousel>
    </>
  );
};


export default Slider;