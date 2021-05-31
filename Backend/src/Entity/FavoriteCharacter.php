<?php

namespace App\Entity;

use App\Repository\FavoriteCharacterRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FavoriteCharacterRepository::class)
 */
class FavoriteCharacter
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $height;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mass;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hair_color;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $skin_color;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $eye_color;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $birth_year;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $homeworld;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $films;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $species;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $vehicles;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $starships;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $created;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $edited;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getHeight(): ?string
    {
        return $this->height;
    }

    public function setHeight(string $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getMass(): ?string
    {
        return $this->mass;
    }

    public function setMass(string $mass): self
    {
        $this->mass = $mass;

        return $this;
    }

    public function getHairColor(): ?string
    {
        return $this->hair_color;
    }

    public function setHairColor(string $hair_color): self
    {
        $this->hair_color = $hair_color;

        return $this;
    }

    public function getSkinColor(): ?string
    {
        return $this->skin_color;
    }

    public function setSkinColor(string $skin_color): self
    {
        $this->skin_color = $skin_color;

        return $this;
    }

    public function getEyeColor(): ?string
    {
        return $this->eye_color;
    }

    public function setEyeColor(string $eye_color): self
    {
        $this->eye_color = $eye_color;

        return $this;
    }

    public function getBirthYear(): ?string
    {
        return $this->birth_year;
    }

    public function setBirthYear(string $birth_year): self
    {
        $this->birth_year = $birth_year;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getHomeworld(): ?string
    {
        return $this->homeworld;
    }

    public function setHomeworld(string $homeworld): self
    {
        $this->homeworld = $homeworld;

        return $this;
    }

    public function getFilms(): ?string
    {
        return $this->films;
    }

    public function setFilms(string $films): self
    {
        $this->films = $films;

        return $this;
    }

    public function getSpecies(): ?string
    {
        return $this->species;
    }

    public function setSpecies(string $species): self
    {
        $this->species = $species;

        return $this;
    }

    public function getVehicles(): ?string
    {
        return $this->vehicles;
    }

    public function setVehicles(string $vehicles): self
    {
        $this->vehicles = $vehicles;

        return $this;
    }

    public function getStarships(): ?string
    {
        return $this->starships;
    }

    public function setStarships(string $starships): self
    {
        $this->starships = $starships;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCreated(): ?string
    {
        return $this->created;
    }

    public function setCreated(string $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getEdited(): ?string
    {
        return $this->edited;
    }

    public function setEdited(string $edited): self
    {
        $this->edited = $edited;

        return $this;
    }
}
