import CustomContainer from '@/components/custom-container/custom-container';
// import { motion } from 'framer-motion';
import StepperComponent from '@/components/section/exp/stepper-component/stepper-component';
import CustomHeader from '@/components/custom-header/custom-header';
import SectionContainer from '@/components/custom-container/section-container';

export function Exp() {
    return (
            // <CustomContainer>
            //    <div className='px-[32px]'>
            //        <CustomHeader text='MY EXPERIENCE' />
            //        <div className='py-[34px]'>
            //            <motion.h1
            //                initial={ { opacity: 0, y: - 100 } }
            //                whileInView={ { opacity: 1, y: 0 } }
            //                viewport={ { once: true, amount: 0.9 } }
            //                transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
            //                className='font-6 text-[24px]'>
            //                My Journey
            //            </motion.h1>
            //            <motion.div
            //                initial={ { opacity: 0 } }
            //                whileInView={ { opacity: 1 } }
            //                viewport={ { once: true, amount: 0.9 } }
            //                transition={ { delay: 0.5 } }
            //                >
            //                <StepperComponent />
            //            </motion.div>
            //        </div>
            //    </div>
            // </CustomContainer>
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='MY EXPERIENCE' />
                <div className='flex flex-col py-[24px] items-center lg:items-start text-justify'>
                    <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                        My Journey
                    </h1>
                    <div className=''>
                        <StepperComponent />
                    </div>
                </div>
            </SectionContainer>
        </CustomContainer>
    );
}

export default Exp;