import React from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Navigate to={`/error?error=${encodeURIComponent(this.state.errorMessage)}`} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
