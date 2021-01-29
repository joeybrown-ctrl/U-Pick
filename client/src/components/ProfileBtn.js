import { Button, Row } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '50%',
        height: '30px',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930',
        fontSize: '11px'
    },
};

const ProfileBtn = () => {
    return (
        <Row>
            <Button style={styles.btn} href='/yourpicks'>
                <p><i className="fas fa-search"></i> Previous Picks</p>
            </Button>
            <Button style={styles.btn} href='/friend'>
                <p><i className="fas fa-users"></i> Friends</p>
            </Button>
        </Row>
    );
};

export default ProfileBtn;