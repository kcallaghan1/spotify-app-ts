import { StyledGrid } from '../styles';

const ArtistsGrid = ({ artists }) => (
    <>
        {artists && artists.length ? (
            <StyledGrid type="artist">
                {artists.map((artist, i) => (
                    <a className="grid__item" key={i} href={artist.external_urls.spotify}>
                        <div className="grid__item__inner">
                            {artist.images[0] && (
                                <div className="grid__item__img">
                                    <img src={artist.images[0].url} alt={artist.name} />
                                </div>
                            )}
                        </div>
                        <h3 className="grid__item__name__overflow-ellipsis">{artist.name}</h3>
                        <p className="grid__item__label">Artist</p>
                    </a>
                ))}
            </StyledGrid>
        ) : (
            <p className="empty-notice">No artists available</p>
        )}
    </>
);

export default ArtistsGrid;