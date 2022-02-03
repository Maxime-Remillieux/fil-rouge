<?php

namespace App\Controller;

use App\Repository\AuthorRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/author')]
class AuthorController extends AbstractController
{
    #[Route('/', name: 'author')]
    public function index(AuthorRepository $repo, Request $req): Response
    {
        $data = $req->toArray();
        $authors = $repo->searchAuthors($data);
        $resp = new Response();
        $resp->setContent(json_encode($authors));
        $resp->setStatusCode(Response::HTTP_OK);
        $resp->headers->set('Content-Type', 'application/json');

        return $resp;
    }
}
