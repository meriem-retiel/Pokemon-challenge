import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader, Avatar, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { typography } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Pokemon({
  id,
  name,
  weight,
  stats,
  types,
  species,
  moves,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card" sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            sx={{ width: 100, height: 100 }}
          />
        }
        title={name}
        subheader={`ID ${id}`}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="primary" variant="subtitle2">
            Species
          </Typography>
          <span>{species.name}</span>
          <Typography color="primary" variant="subtitle2">
            Weight:{" "}
          </Typography>
          <span>{weight}</span>
          <Typography color="primary" variant="subtitle2">
            Stats:{" "}
          </Typography>
          <ul>
            {stats.map((item) => {
              return (
                <li>
                  <span>Stat: </span> <span> {item.stat.name}</span>
                  <span> Base Stat: </span>
                  <span>{item.base_stat}</span>
                  <span> Effort: </span>
                  <span>{item.effort}</span>
                </li>
              );
            })}
          </ul>
          <Typography color="primary" variant="subtitle2">
            Types
          </Typography>
          {types.map((item) => {
            return <span>{item.type.name} - </span>;
          })}
          <Typography color="primary" variant="subtitle2">
            Moves
          </Typography>
          {moves.map((item) => {
            return <span>{item.move.name} - </span>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
