import React from 'react';
import {MDXProvider} from "@mdx-js/react";

export default function MdxDefaultLayout({children}){
    return (
        <MDXProvider>
            <div>MDX : {children}</div>
        </MDXProvider>
    )
}
