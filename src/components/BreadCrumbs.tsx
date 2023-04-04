import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

const BreadCrumbs = () => {
    return (
        <>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
            </MDBBreadcrumb>

            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='/'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
            </MDBBreadcrumb>

            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href="#">Library</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </>
    );
};

export default BreadCrumbs;