import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

export const CheckoutSteps=()=>
{
    const steps=[
        {
            label:<Typography>Shipping Details</Typography>,
            icon:<LocalShippingIcon/>,
        },
        {
            label:<Typography>Confirm Orders</Typography>,
            label:<LibraryAddCheckIcon/>
        },
        {
            label:<Typography>Payment</Typography>,
            icon:<AccountBalanceIcon/>
        }
    ]
    return(
        <>
            <Stepper alternativeLabel activeStep={0} style={{boxSizing:'border-box'}}>
                {
                    steps.map((item,index)=>(
                        <Step key={index}>
                            <StepLabel  icon={item.icon}>
                                {item.label}
                            </StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </>
    )
}



// const steps=[
    //     {
    //         label:<p>Shipping Details</p>,
    //         icon:<LocalShippingIcon/>,
    //     },
    //     {
    //         label:<Typography>Confirm Orders</Typography>,
    //         label:<LibraryAddCheckIcon/>
    //     },
    //     {
    //         label:<Typography>Payment</Typography>,
    //         icon:<AccountBalanceIcon/>
    //     }
    // ]