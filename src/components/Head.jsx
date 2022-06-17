import React from 'react';

const Head = (props) => {

    React.useEffect(() => {
        document.title = `nBuy | ${props.title !== null ? props.title : 'Carregando...'}`
        document.querySelector('meta[name="description"]')
                .setAttribute('content', props.description)
    }, [props]);

    return <></>;
}

export default Head;
