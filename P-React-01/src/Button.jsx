import PropTypes from 'prop-types'

export function Button({tittle}) {
    return <button>
        {tittle}
    </button>
}
Button.propTypes = {
    tittle: PropTypes.string.isRequired
}