import React from "react"

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`h-[100vh] overflow-y-auto text-color`}>
            {children}
        </main>
    );
};

export default Content;