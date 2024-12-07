import React from "react"

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`h-full text-color`}>
            {children}
        </main>
    );
};

export default Content;