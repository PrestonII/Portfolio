import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CldImage } from 'next-cloudinary';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Sample 5',
    imgPath: 'cld-sample-5',
  },
  {
    label: 'Sample 4',
    imgPath: 'cld-sample-4',
  },
  {
    label: 'Sample 3',
    imgPath: 'cld-sample-3',
  },
];

function ImageCarousel({
  imageWidth,
  imageHeight,
}: {
  imageWidth?: number;
  imageHeight?: number;
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const titleBoxHeight = 0;
  const stepperBoxHeight = 48;
  const imageBoxHeight = imageHeight
    ? imageHeight - titleBoxHeight - stepperBoxHeight
    : 400;

  return (
    <Box
      sx={{ maxWidth: imageWidth ?? 400, flexGrow: 1, maxHeight: imageHeight }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: titleBoxHeight,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CldImage
                src={step.imgPath}
                width={imageWidth}
                height={imageBoxHeight}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight
                sx={{
                  color: '#fe4646',
                }}
              />
            )}
          </Button>
        }
        sx={{
          bgcolor: 'transparent',
          '& .MuiMobileStepper-dotActive': {
            bgcolor: '#fe4646',
          },
        }}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft
                sx={{
                  color: '#fe4646',
                }}
              />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default ImageCarousel;
