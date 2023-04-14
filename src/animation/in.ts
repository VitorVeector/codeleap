interface inAnimationProps {
    initial: { opacity: number };
    animate: { opacity: number };
    transition: { duration: number };
}

export const inAnimation: inAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
};
